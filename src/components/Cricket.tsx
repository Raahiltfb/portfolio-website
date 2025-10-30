import React from 'react';
import { Target, Clock, TrendingUp, Activity, Trophy, Play, Calendar, Apple, Droplets, Moon } from 'lucide-react';

const Cricket: React.FC = () => {
  const progressMetrics = [
    {
      title: '5K Running Time',
      current: '23:08',
      target: 'Sub-20:00',
      progress: 75,
      unit: 'minutes'
    },
    {
      title: 'Bowling Pace',
      current: '125',
      target: '130',
      progress: 85,
      unit: 'km/h'
    },
    {
      title: 'Strength Progress',
      current: '80',
      target: '100',
      progress: 80,
      unit: '% of target'
    }
  ];

  const trainingSchedule = [
    { day: 'Monday', am: 'Cricket', pm: 'Run', amType: 'Cricket', pmType: 'Cardio' },
    { day: 'Tuesday', am: 'Rest', pm: 'Gym', amType: 'Recovery', pmType: 'Strength' },
    { day: 'Wednesday', am: 'Cricket', pm: 'Rest', amType: 'Cricket', pmType: 'Recovery' },
    { day: 'Thursday', am: 'Run', pm: 'Gym', amType: 'Cardio', pmType: 'Strength' },
    { day: 'Friday', am: 'Cricket', pm: 'Rest', amType: 'Cricket', pmType: 'Recovery' },
    { day: 'Saturday', am: 'Gym', pm: 'Cricket', amType: 'Strength', pmType: 'Cricket' },
    { day: 'Sunday', am: 'Rest', pm: 'Gym', amType: 'Recovery', pmType: 'Strength' }
  ];

  const achievements = [
    'A Division Cricketer Mumbai',
    'C Division Corporate Cricket Mumbai',
    'Goa Age Group State Camps/Net bowler',
    'Minor League Cricket USA - Manhattan Yorkers (with an offer from Metroplex Tracers)',
    'Played with and against top level talent'
  ];

  const dietPlan = {
    breakfast: {
      title: '🥣 Breakfast',
      calories: '~830 kcal',
      items: [
        '40g oats',
        '1 banana',
        '1 scoop Foodstrong Chocolate Almond Whey (34g)',
        '1 tbsp The Whole Truth Dark Chocolate Peanut Butter',
        '10-15 nuts (pecans, almonds, walnuts)',
        'Milk + Sri Lankan cinnamon + occasional chocolate chips'
      ]
    },
    lunch: {
      title: '🍛 Lunch',
      calories: '~800 kcal',
      items: [
        '200g cooked chicken thigh',
        '2 rotis',
        'Side of veggies or salad'
      ]
    },
    snack: {
      title: '☕ Snack',
      calories: '~150-200 kcal',
      items: [
        '1 scoop Origin Plant (Pea) Protein – Chocolate Fudge (40.5g) with water'
      ]
    },
    dinner: {
      title: '🍽️ Dinner',
      calories: '~800 kcal',
      items: [
        '200g cooked chicken thigh',
        '1 cup pasta (red sauce or pesto)',
        'Side of veggies or salad'
      ]
    }
  };

  const macros = {
    protein: 35,
    carbs: 40,
    fats: 25
  };

  const recoveryStats = [
    { icon: <Moon size={20} />, label: 'Sleep', value: '9-10 hrs', color: 'text-purple-500' },
    { icon: <Droplets size={20} />, label: 'Water', value: '4+ litres', color: 'text-blue-500' },
    { icon: <Activity size={20} />, label: 'Stretching', value: '~30 mins daily', color: 'text-green-500' }
  ];

  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            <span className="font-semibold">Cricket & Performance</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Athletic discipline meets systematic training — the same principles that drive my development work.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Target className="mr-3 text-cyan-500" size={24} />
            Progress Tracker
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {progressMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="font-semibold text-lg">{metric.title}</h4>
                  <span className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">
                    {metric.progress}%
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Current: {metric.current} {metric.unit}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-400">Target: {metric.target} {metric.unit}</span>
                  </div>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${metric.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Training Schedule */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center">
            <Calendar className="mr-3 text-cyan-500" size={24} />
            Weekly Training Schedule
          </h3>
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700">
            {trainingSchedule.map((day, index) => (
              <div
                key={index}
                className="p-6 border-b border-gray-200 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-3 gap-4 items-center">
                  <div className="font-semibold text-lg group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                    {day.day}
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">AM</div>
                    <div className="flex items-center justify-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        day.amType === 'Cricket' ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' :
                        day.amType === 'Strength' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                        day.amType === 'Cardio' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {day.am}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">PM</div>
                    <div className="flex items-center justify-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        day.pmType === 'Cricket' ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300' :
                        day.pmType === 'Strength' ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' :
                        day.pmType === 'Cardio' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {day.pm}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Diet & Recovery */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Apple className="mr-3 text-cyan-500" size={24} />
              Diet & Recovery
            </h3>
            
            {/* Macros Pie Chart */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 mb-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="font-semibold text-lg">Daily Nutrition</h4>
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">2,500-2,700 kcal</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">{macros.protein}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Protein</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{macros.carbs}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">{macros.fats}%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Fats</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {Object.values(dietPlan).map((meal, index) => (
                  <div key={index} className="border-l-4 border-cyan-500 pl-4">
                    <div className="flex justify-between items-center mb-2">
                      <h5 className="font-medium">{meal.title}</h5>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{meal.calories}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {meal.items.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recovery Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <h4 className="font-semibold text-lg mb-4">Recovery Protocol</h4>
              <div className="space-y-4">
                {recoveryStats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg bg-gray-100 dark:bg-gray-700 ${stat.color}`}>
                      {stat.icon}
                    </div>
                    <div>
                      <div className="font-medium">{stat.label}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stat.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                Supports active training load (cricket + gym + runs) • Weight stable at ~72-73kg, 5ft11in
              </div>
            </div>
          </div>

          {/* Cricket Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Trophy className="mr-3 text-cyan-500" size={24} />
              Cricket Achievements
            </h3>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Personal Story */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">The Athletic Mindset</h3>
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed mb-6">
                Cricket taught me that consistency beats intensity. Every morning at 5:30 AM, whether it's nets, gym, or a 5K run, 
                I show up. This isn't just about physical fitness — it's about building the mental framework that carries into every project I touch.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                When I'm debugging code at 11 PM or optimizing a client's workflow automation, I draw on the same persistence that 
                got me through state-level cricket camps and MiLC appearances. The discipline of tracking every run, every rep, 
                every bowling session translates directly to systematic problem-solving in development work.
              </p>
              <p className="text-lg leading-relaxed">
                Training isn't separate from my professional life — it's the foundation. The same attention to detail that helps me 
                analyze my bowling action helps me architect clean, efficient systems. Athletic performance and code quality both 
                demand relentless improvement, measurement, and the courage to start over when something isn't working.
              </p>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">In Action</h3>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="relative bg-gray-100 dark:bg-gray-700 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <Play className="mx-auto mb-4 text-cyan-500" size={48} />
                <p className="text-gray-600 dark:text-gray-400 mb-2">MiLC & Training Highlights</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">30-45s highlight reel coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cricket;
