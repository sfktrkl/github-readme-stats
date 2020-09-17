function calculateRank({
  totalRepos,
  totalCommits,
  contributions,
  followers,
  prs,
  issues,
  stargazers,
}) {
  return { level: "⭐", score: 0 };
}

module.exports = calculateRank;
