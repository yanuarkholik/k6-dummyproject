export const scenarios = {
  smoke: {
    executor: 'shared-iterations',
    exec: 'runSmokeTest',
    vus: 1,
    iterations: 1,
    maxDuration: '30s',
    tags: { test_type: 'smoke-test'},
  },
  load: {
    executor: 'ramping-vus',
    exec: 'runLoadTest',
    startVUs: 0,
    stages: [
      {duration: '30s', target:5},
      {duration: '30s', target:10},
      {duration: '30s', target:20},
      {duration: '30s', target:0},
    ],
    gracefulStop: '10s',
    tags: { test_type: 'load-test'},
  },
  stress: {
    executor: 'ramping-vus',
    exec: 'runStressTest',
    startVUs: 0,
    stages: [
      {duration: '30s', target:100},
      {duration: '30s', target:1000},
      {duration: '30s', target:500},
      {duration: '30s', target:1000},
      {duration: '30s', target:0},
    ],
    gracefulStop: '10s',
    tags: { test_type: 'stress-test'},
  }
}

export function getScenarios() {
  const targetScenario = __ENV.SCENARIO;
  if (targetScenario && scenarios[targetScenario]) {
    return { [targetScenario]: scenarios[targetScenario] };
  }
  return {smoke: scenarios.smoke}

} 
