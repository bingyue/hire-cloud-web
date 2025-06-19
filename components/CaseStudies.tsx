'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, Users, Clock } from 'lucide-react'

const CaseStudies = () => {
  const [currentCase, setCurrentCase] = useState(0)

  const cases = [
    {
      company: '某大型电商平台',
      industry: '电商零售',
      challenge: '客服压力大，响应时间长，用户满意度下降',
      solution: '部署智能客服数字员工，24/7在线服务',
      results: [
        { metric: '响应时间', value: '从5分钟降至10秒', improvement: '97%' },
        { metric: '客户满意度', value: '从75%提升至95%', improvement: '27%' },
        { metric: '人力成本', value: '年节省200万元', improvement: '60%' }
      ],
      testimonial: '智创云的数字员工解决方案彻底改变了我们的客服体验，客户满意度显著提升。',
      author: '张总 - 运营总监',
      rating: 5,
      logo: 'E',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      company: '某知名教育机构',
      industry: '教育培训',
      challenge: '学员管理复杂，课程安排效率低，咨询量大',
      solution: '引入教育行业定制化数字员工系统',
      results: [
        { metric: '管理效率', value: '提升85%', improvement: '85%' },
        { metric: '课程安排', value: '自动化率达90%', improvement: '90%' },
        { metric: '咨询处理', value: '24小时不间断', improvement: '100%' }
      ],
      testimonial: '数字员工让我们的教学管理变得更加智能化，老师可以专注于教学质量提升。',
      author: '李校长 - 教学总监',
      rating: 5,
      logo: 'T',
      color: 'from-purple-500 to-pink-500'
    },
    {
      company: '某金融科技公司',
      industry: '金融服务',
      challenge: '风控流程繁琐，客户服务标准化难度大',
      solution: '部署金融专业数字员工，标准化服务流程',
      results: [
        { metric: '风控效率', value: '提升70%', improvement: '70%' },
        { metric: '服务标准化', value: '一致性达99%', improvement: '99%' },
        { metric: '合规性', value: '零风险事件', improvement: '100%' }
      ],
      testimonial: '在严格的金融监管环境下，数字员工帮助我们实现了高效且合规的服务。',
      author: '王总 - 风控总监',
      rating: 5,
      logo: 'F',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % cases.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [cases.length])

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            客户
            <span className="tech-text-gradient">案例</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            真实案例见证，数字员工为企业带来的显著价值提升
          </p>
        </motion.div>

        {/* 案例轮播 */}
        <div className="relative">
          <motion.div
            key={currentCase}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* 左侧：公司信息和挑战 */}
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cases[currentCase].color} rounded-2xl flex items-center justify-center`}>
                    <span className="text-2xl font-bold text-white">{cases[currentCase].logo}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{cases[currentCase].company}</h3>
                    <p className="text-tech-cyan font-semibold">{cases[currentCase].industry}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Clock className="h-5 w-5 text-red-500 mr-2" />
                      面临挑战
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{cases[currentCase].challenge}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <TrendingUp className="h-5 w-5 text-blue-500 mr-2" />
                      解决方案
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{cases[currentCase].solution}</p>
                  </div>
                </div>

                {/* 客户评价 */}
                <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                  <Quote className="h-8 w-8 text-tech-cyan mb-4" />
                  <p className="text-gray-700 italic mb-4 leading-relaxed">
                    "{cases[currentCase].testimonial}"
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-semibold">{cases[currentCase].author}</span>
                    <div className="flex space-x-1">
                      {[...Array(cases[currentCase].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 右侧：效果数据 */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">实施效果</h4>
                <div className="space-y-6">
                  {cases[currentCase].results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-lg font-semibold text-gray-900">{result.metric}</h5>
                        <div className="text-2xl font-bold tech-text-gradient">
                          +{result.improvement}
                        </div>
                      </div>
                      <p className="text-gray-600">{result.value}</p>
                      <div className="mt-3 bg-gray-100 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${cases[currentCase].color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${parseInt(result.improvement)}%` }}
                          transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 导航按钮 */}
          <button
            onClick={prevCase}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 group-hover:text-tech-cyan" />
          </button>
          <button
            onClick={nextCase}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 group-hover:text-tech-cyan" />
          </button>
        </div>

        {/* 指示器 */}
        <div className="flex justify-center space-x-3 mt-8">
          {cases.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCase(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCase ? 'bg-tech-cyan scale-125' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* 底部统计 */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {[
            { number: '100+', label: '成功案例', icon: TrendingUp },
            { number: '15+', label: '行业覆盖', icon: Users },
            { number: '95%', label: '客户满意度', icon: Star },
            { number: '24/7', label: '服务时长', icon: Clock }
          ].map((stat, index) => (
            <div key={index} className="space-y-3">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-tech-cyan to-primary-600 rounded-xl mb-3">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold tech-text-gradient">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CaseStudies 