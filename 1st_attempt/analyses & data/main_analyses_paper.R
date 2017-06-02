require('ggplot2')
require('dplyr')
require('lme4')
require('gridExtra')
require('reshape2')
require('BayesFactor')
require('ggmcmc') # for nicer plots
require('boot')

save = TRUE # whether to save plots

#################################
## convenience functions
#################################

remove_loafers = function(data){
  control <- data[data$condition %in% c("test_uncertain", "test_false", "test_true"),]
  control$distance <- ifelse(control$condition == "test_uncertain", 
                             abs(control$answer - 0.5),
                             ifelse(control$condition == "test_false",
                                    control$answer,
                                    1-control$answer))
  loafers = control %>% group_by(id) %>%
    summarize(dist = sum(distance))
  # show(ggplot(loafers, aes(x = dist)) + geom_histogram(binwidth = 0.5, colour = "black", fill = "firebrick") + theme_bw())
  loafing_threshold = mean(loafers$dist) + 2 * sd(loafers$dist)
  bad_participants <- loafers[loafers$dist > loafing_threshold,]$id
  data <- data[!(data$id %in% bad_participants),]
  show(paste0(c('removed ', length(bad_participants), ' loafers'), sep = "", collapse = ""))
  data$id <- factor(data$id)
  return(data)
}

extract_data = function(data){
  cdata = data %>% group_by(name, condition, type) %>%
    summarize(N = length(answer),
              mean    = mean(answer),
              se.mean = sd(answer) / sqrt(N),
              se.RT   = sd(RT) / sqrt(N),
              RT      = mean(RT))
  return(cdata)
}

summarize_explanatory_factors = function(data){
  cimeans = function(dataVec){
    extract_mean = function(data, indices){
      return(mean(data[indices]))
    }
    b = boot(dataVec, extract_mean, 2000)
    c = boot.ci(b, type = "basic")$basic[c(4,5)]
  }
  
  data = data %>% filter(condition %in% c('rel', 'comp', 'prior')) %>% 
    mutate(highlow = ifelse(condition == 'rel', relevance, ifelse(condition == "comp", competence, prior)))
  EFdata = data %>% 
    group_by(condition, highlow) %>%
    summarize(mean = mean(answer),
              cimeanslow = cimeans(answer)[1],
              cimeanshigh = cimeans(answer)[2]) %>%
    mutate (highlow = ifelse(highlow == 1, "high", "low"))
  EFdata$highlow = factor(EFdata$highlow, levels = c("low", "high"), ordered = T)
  return(EFdata)
}

##################################
### I use here the numbering of 
### experiments from the paper
###
### Exp 1: "some"
### Exp 2: "or"
### Exp 3: "exh"
##################################

# get and prepare data Exp 1 (SOME)
dataSome <- read.csv("03_some/data_exp3.csv", sep = "\t")
dataSome$id = factor(substr(dataSome$id, 1, 13))
dataSome = droplevels(filter(dataSome, ! language %in% c("373", "Pashto", "vietnamese")))
dataSome = droplevels(filter(dataSome, name != "NBA experts"))
dataSome = remove_loafers(dataSome)
cdataSome = extract_data(dataSome)
rel.dpSome        <- cdataSome[cdataSome$condition == "rel",]$mean
pri.dpSome        <- cdataSome[cdataSome$condition == "prior",]$mean
com.dpSome        <- cdataSome[cdataSome$condition == "comp",]$mean
names(rel.dpSome) <- cdataSome[cdataSome$condition == "rel",]$name
names(pri.dpSome) <- cdataSome[cdataSome$condition == "prior",]$name
names(com.dpSome) <- cdataSome[cdataSome$condition == "comp",]$name
dataSome$rel      <- rel.dpSome[dataSome$name]
dataSome$pri      <- pri.dpSome[dataSome$name]
dataSome$com      <- com.dpSome[dataSome$name]
imp <- dataSome[dataSome$condition == "imp",]

# get and prepare data Exp 2 (OR)
dataOR <- read.csv("01_xor-main/data2.csv")
dataOR <- droplevels(filter(dataOR, !(language %in% c("Vietnamese", 
                                                  "Spanish", 
                                                  "Bengali, but I speak English as if I were a native speaker"))))
dataOR = droplevels(filter(dataOR, name != "Bill's order"))
dataOR = remove_loafers(dataOR)
cdataOR = extract_data(dataOR)
rel.dpOR        <- cdataOR[cdataOR$condition == "rel",]$mean
pri.dpOR        <- cdataOR[cdataOR$condition == "prior",]$mean
com.dpOR        <- cdataOR[cdataOR$condition == "comp",]$mean
names(rel.dpOR) <- cdataOR[cdataOR$condition == "rel",]$name
names(pri.dpOR) <- cdataOR[cdataOR$condition == "prior",]$name
names(com.dpOR) <- cdataOR[cdataOR$condition == "comp",]$name
dataOR$rel      <- rel.dpOR[dataOR$name]
dataOR$pri      <- pri.dpOR[dataOR$name]
dataOR$com      <- com.dpOR[dataOR$name]

# get and prepare data Exp 3 (EXH)
dataEXH <- read.csv("02_exhaustive-disjuncts/dataExp2_14122015.csv")
dataEXH <- droplevels(filter(dataEXH, !(language %in% c("Tamil"))))
dataEXH$condition = dataEXH$trialType
dataEXH = remove_loafers(dataEXH)
dataEXH$condition = ifelse(dataEXH$condition == "exh1", "exh", ifelse(dataEXH$condition == "exh2", "exh", dataEXH$condition))
cdataEXH = extract_data(dataEXH)
exh.dpOR  <- cdataEXH[cdataEXH$condition == "exh",]$mean
names(exh.dpOR) <- cdataEXH[cdataEXH$condition == "exh",]$name
dataOR$exh      <- exh.dpOR[dataOR$name]

xor <- dataOR[dataOR$condition == "xor",]

######################################
# control conditions
######################################

# Exp 1
t.test(mean ~ condition , 
       data = filter(cdataSome, condition %in% c("test_false", "test_uncertain")),
       alternative = "less")
ttestBF(filter(cdataSome, condition %in% c("test_false"))$mean, filter(cdataSome, condition %in% c("test_uncertain"))$mean)
t.test(mean ~ condition , 
       data = filter(cdataSome, condition %in% c("test_uncertain", "test_true")),
       alternative = "greater")
ttestBF(filter(cdataSome, condition %in% c("test_uncertain"))$mean, filter(cdataSome, condition %in% c("test_true"))$mean)
# Exp 2
t.test(mean ~ condition , 
       data = filter(cdataOR, condition %in% c("test_false", "test_uncertain")),
       alternative = "less")
ttestBF(filter(cdataOR, condition %in% c("test_false"))$mean, filter(cdataOR, condition %in% c("test_uncertain"))$mean)
t.test(mean ~ condition , 
       data = filter(cdataOR, condition %in% c("test_uncertain", "test_true")),
       alternative = "greater")
ttestBF(filter(cdataOR, condition %in% c("test_uncertain"))$mean, filter(cdataOR, condition %in% c("test_true"))$mean)

######################################
# test intuitive classification
######################################

# test intuitions Exp 1
t.test(answer ~ relevance, data = filter(dataSome, condition %in% c("rel") ))
t.test(answer ~ competence, data = filter(dataSome, condition %in% c("comp") ))
t.test(answer ~ prior, data = filter(dataSome, condition %in% c("prior") ))
# test intuitions Exp 2
t.test(answer ~ relevance, data = filter(dataOR, condition %in% c("rel") ))
t.test(answer ~ competence, data = filter(dataOR, condition %in% c("comp") ))
t.test(answer ~ prior, data = filter(dataOR, condition %in% c("prior") ))



######################################
# barplots with CIs
######################################

EFsumOR = summarize_explanatory_factors(dataOR) %>% mutate(experiment = "or")
EFsumSome = summarize_explanatory_factors(dataSome) %>% mutate(experiment = "some")
EFsum = rbind(EFsumOR, EFsumSome)
EFsum$experiment = factor(EFsum$experiment, ordered = T, levels = c("some", "or"))
EFsum$cond = ifelse(EFsum$condition == "comp", "com", ifelse(EFsum$condition == "prior", "pri", "rel"))
EFsum$cond = factor(EFsum$cond, levels = c("rel", "com", "pri"), ordered = T)

EFbarplot = ggplot(EFsum, aes(x = highlow, y = mean, fill = highlow)) + 
  geom_bar(stat = "identity") + facet_grid(experiment ~ cond) +
  geom_errorbar(width=.25, aes(ymin=cimeanslow, ymax=cimeanshigh)) + 
  guides(fill=FALSE) + theme_bw() + scale_fill_manual(values=c("#CCCCCC","#666666"))
show(EFbarplot)
if (save) {ggsave(filename = '../texts/01_paper_draft/pics_02/EFbarsExp12.pdf', EFbarplot, height = 4, width = 6)}


######################################
# corellation plots
######################################

# exps 1 and 2
xor.dp <- cdataOR[cdataOR$condition == "xor",]$mean
dfOR <- data.frame(imp = xor.dp, rel = rel.dpOR, com = com.dpOR, pri = pri.dpOR)
dfOR$vignetteID = c("clothes", "dancing", "sunscreen", "squash", "graduate", "exams", "pet", "NY", "delay", "golf",
                  "drinking", "health", "lunch", "accident", "club")
corPlotOR = melt(dfOR, measure.vars = c("rel", "com", "pri")) %>% mutate(experiment = "or")

imp.dp <- cdataSome[cdataSome$condition == "imp",]$mean
dfSome <- data.frame(imp = imp.dp, rel = rel.dpSome, com = com.dpSome, pri = pri.dpSome)
dfSome$vignetteID = c("Harvard", "M&M's", "cookies", "quiz", "watch", "emails", "gifts", "dessert", "airco",
                  "tomatoes", "schizo", "comedy", "donkey", "drinking", "vGogh")
#df <- df[! df$vignetteID %in% c("gifts"),]
corPlotSome = melt(dfSome, measure.vars = c("rel", "com", "pri")) %>% mutate(experiment = "some")

cordata = rbind(corPlotOR, corPlotSome)
cordata$experiment = factor(cordata$experiment, ordered = T, levels = c("some", "or"))

corPlot = ggplot(cordata, aes(x = value, y = imp)) + geom_point() + theme_bw() + geom_smooth(method = lm, se = TRUE) +
  geom_text(aes(label=vignetteID),hjust=0.5, vjust=-0.4, color = "firebrick", size = 2.5) + xlim(0,0.9) + 
  facet_grid(experiment ~ variable, scales = "free") +
  xlab("mean value of explanatory factor") + ylab("mean strength of enrichment") + theme(axis.text.x = element_text(angle = 30, hjust = 1))
show(corPlot)
if (save) {
  ggsave(filename = "../texts/01_paper_draft/pics_02/correlationExp12.pdf", plot = corPlot, width = 6, height = 4)
}

# exp 3
dfSimple <- data.frame(xor = xor.dp, exh = exh.dpOR, pri = pri.dpOR)
dfSimple$vignetteID = c("clothes", "dancing", "sunscreen", "squash", "graduate", "exams", "pet", "NY", "delay", "golf",
                        "drinking", "health", "lunch", "accident", "club")
dfPlotSimple = melt(dfSimple, measure.vars = c("pri", "xor"))
corPlotSimple = ggplot(dfPlotSimple, aes(x = exh,  y = value)) + geom_point() + theme_bw() + geom_smooth(method = lm, se = TRUE) +
  geom_text(aes(label=vignetteID),hjust=0.5, vjust=-0.4, color = "firebrick", size = 2.5) + xlim(0,1) + facet_grid(. ~ variable) +
  xlab("mean exhaustive reading") + ylab("mean prior / mean exclusive reading") + theme(axis.text.x = element_text(angle = 30, hjust = 1))
show(corPlotSimple)
if (save) {
  ggsave(filename = "../texts/01_paper_draft/pics_02/correlationExhXorPri.pdf", plot = corPlotSimple, width = 6, height = 3)
}

######################################
# check collinearity
######################################

cor.test(dfOR$rel, dfOR$com)
cor.test(dfOR$rel, dfOR$pri)
cor.test(dfOR$com, dfOR$pri)
cor.test(exh.dpOR, pri.dpOR)

cor.test(dfSome$rel, dfSome$com)
cor.test(dfSome$rel, dfSome$pri)
cor.test(dfSome$com, dfSome$pri)


####################################
## regression models for Exp 1
####################################

bfsAllSome = generalTestBF(answer ~ rel + com + pri, data = imp)
plot(bfsAllSome)
if (save) {
  pdf('../texts/01_paper_draft/pics_02/bfsAllExp1.pdf', height = 4, width = 6)
  plot(bfsAllSome)
  dev.off()
}

####################################
## regression models for Exp 2
####################################

bfsAllOR = generalTestBF(answer ~ rel + com + pri, data = xor)
plot(bfsAllOR)
if (save) {
  pdf('../texts/01_paper_draft/pics_02/bfsAllExp2.pdf', height = 4, width = 6)
  plot(bfsAllOR)
  dev.off()
}

####################################
## regression models for Exp 3
####################################

bfsExh = generalTestBF(answer ~ exh, data = xor)
show(plot(c(bfsExh, bfsAllOR)))
if (save) {
  pdf('../../texts/01_paper_draft/pics_02/bfsAllExp3.pdf', height = 4, width = 6)
  plot(c(bfsExh, bfsAllOR))
  dev.off()
}

####################################
## regression model coefficients
####################################

# Coefficients for full model
fullOR = lmBF(answer ~ rel + pri + com, data = xor)
chainsOR = posterior(fullOR, iterations = 50000, chains = 2) # get posterior samples
mcOR = ggs(mcmc(chainsOR)) # transform to ggmcmc object
mcOR = filter(mcOR, Parameter %in% c("rel", "com", "pri"))
mcOR$Parameter = factor(mcOR$Parameter, levels = c("rel", "com", "pri"), ordered = T)
mcOR$experiment = "or"

# Coefficients for full model
fullSome = lmBF(answer ~ rel + pri + com, data = imp)
chainsSome = posterior(fullSome, iterations = 50000, chains = 2) # get posterior samples
mcSome = ggs(mcmc(chainsSome)) # transform to ggmcmc object
mcSome = filter(mcSome, Parameter %in% c("rel", "com", "pri"))
mcSome$Parameter = factor(mcSome$Parameter, levels = c("rel", "com", "pri"), ordered = T)
mcSome$experiment = "some"

mc = rbind(mcOR, mcSome)
mc$experiment = factor(mc$experiment, levels = c("some", "or"), ordered = T)

densityMCMC = ggplot(mc, aes(x = value)) + geom_density() + 
  facet_grid(experiment ~ Parameter, scales = "free") + 
  xlab("values of regression coefficients") + ylab("posterior probability") + 
  theme_bw() + theme(axis.text.x = element_text(angle = 45, hjust = 1))
# densityMCMC = ggs_density(mc, family = c("rel|com|pri"))
show(densityMCMC)
if (save) {ggsave(filename = '../texts/01_paper_draft/pics_02/densityMCMCExp12.pdf', densityMCMC, height = 4, width = 6)}


