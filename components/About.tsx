'use client'

import { motion } from 'framer-motion'
import { Target, Award, Users, TrendingUp, Globe, Shield } from 'lucide-react'

const About = () => {
  const features = [
    {
      icon: Target,
      title: '企业定位',
      description: '专注于智能体数字员工外包服务的科技公司',
      details: '致力于通过先进的人工智能技术，为企业提供高效、专业的数字员工解决方案，成为数字化转型的领导者。',
      stats: '100+',
      statsLabel: '服务企业'
    },
    {
      icon: Award,
      title: '价值主张',
      description: '降本增效，释放人力资源潜能',
      details: '通过AI数字员工替代重复性工作，让人才专注于更有创造性的任务，为企业创造更大价值。',
      stats: '80%',
      statsLabel: '效率提升'
    },
    {
      icon: Users,
      title: '服务优势',
      description: '专业团队，定制化服务',
      details: '拥有顶尖的AI技术团队和丰富的行业经验，为每个客户提供量身定制的智能化解决方案。',
      stats: '24/7',
      statsLabel: '全天候服务'
    }
  ]

  const capabilities = [
    { icon: Globe, text: '多行业覆盖' },
    { icon: Shield, text: '数据安全保障' },
    { icon: TrendingUp, text: '持续优化升级' },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
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
            关于
            <span className="tech-text-gradient">智创云</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            上海森泽智创人工智能技术有限公司是一家专注于智能体数字员工外包服务的创新科技企业，
            致力于通过前沿AI技术重塑企业工作方式。
          </p>
        </motion.div>

        {/* 三列特色介绍 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-tech-cyan to-primary-600 rounded-2xl mb-4">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-tech-cyan font-semibold">{feature.description}</p>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">{feature.details}</p>
              
              <div className="text-center pt-4 border-t border-gray-100">
                <div className="text-3xl font-bold tech-text-gradient">{feature.stats}</div>
                <div className="text-sm text-gray-500 font-medium">{feature.statsLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 核心能力展示 */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                为什么选择我们？
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                我们不仅仅是技术提供商，更是您数字化转型路上的可靠伙伴。
                凭借深厚的技术积累和丰富的行业经验，我们能够为您提供最适合的智能化解决方案。
              </p>
              
              <div className="space-y-4">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-tech-cyan/10 rounded-full flex items-center justify-center">
                      <capability.icon className="h-5 w-5 text-tech-cyan" />
                    </div>
                    <span className="text-gray-700 font-medium">{capability.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <motion.div
                className="bg-gradient-to-br from-tech-cyan/20 to-primary-600/20 rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold tech-text-gradient mb-2">5+</div>
                    <div className="text-gray-600 text-sm">年技术积累</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold tech-text-gradient mb-2">50+</div>
                    <div className="text-gray-600 text-sm">专业技术人员</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold tech-text-gradient mb-2">99.9%</div>
                    <div className="text-gray-600 text-sm">服务可用性</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold tech-text-gradient mb-2">1000+</div>
                    <div className="text-gray-600 text-sm">成功案例</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 