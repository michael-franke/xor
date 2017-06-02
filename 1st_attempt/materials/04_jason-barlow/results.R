library(ggplot2)
res <- read.csv("c:/users/bob/downloads/results.csv", header = T, sep = ",")
res$CON <- ifelse(res$Input.thequestion == "From what Jason Barley said we may conclude that not all of the decisive playoff matches were secured in the last seconds by Greg Jones.", "NP-negation", "VP-negation")
pdf("results.pdf", width = 5, height = 3)
ggplot(res, aes(x = Answer.q3, fill = CON)) + 
  geom_histogram(binwidth = 1, alpha = 0.5, position = "identity") +
  theme_bw() +
  xlim(1,8)
dev.off()

t.test(res[res$CON == "NP-negation",]$Answer.q3, res[res$CON == "VP-negation",]$Answer.q3)
