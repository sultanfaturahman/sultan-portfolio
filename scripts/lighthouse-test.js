// Lighthouse Performance Testing Script
// Run with: node scripts/lighthouse-test.js

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

async function runLighthouse() {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
    port: chrome.port,
  };
  
  const runnerResult = await lighthouse('https://sultan-portfolio.netlify.app', options);
  
  // Extract scores
  const scores = {
    performance: runnerResult.lhr.categories.performance.score * 100,
    accessibility: runnerResult.lhr.categories.accessibility.score * 100,
    bestPractices: runnerResult.lhr.categories['best-practices'].score * 100,
    seo: runnerResult.lhr.categories.seo.score * 100,
  };
  
  console.log('🚀 Lighthouse Scores:');
  console.log(`Performance: ${scores.performance}/100`);
  console.log(`Accessibility: ${scores.accessibility}/100`);
  console.log(`Best Practices: ${scores.bestPractices}/100`);
  console.log(`SEO: ${scores.seo}/100`);
  
  // Check if meets targets (90/90/100/100)
  const targets = { performance: 90, accessibility: 90, bestPractices: 100, seo: 100 };
  const passed = Object.keys(scores).every(key => scores[key] >= targets[key]);
  
  console.log(passed ? '✅ All targets met!' : '❌ Some targets not met');
  
  await chrome.kill();
  return scores;
}

// Uncomment to run (requires lighthouse and chrome-launcher packages)
// runLighthouse().catch(console.error);
