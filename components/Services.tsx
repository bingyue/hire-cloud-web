'use client'

import { motion } from 'framer-motion'
import { UserCheck, Users, Headphones, ArrowRight, CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: UserCheck,
      title: '招聘数字员工',
      description: '智能化招聘流程，精准匹配人才',
      features: ['简历智能筛选', '面试自动化安排', '候选人评估分析', '入职流程优化'],
      benefits: '提升招聘效率90%，降低人力成本70%',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: '人力资源数字员工',
      description: '全面的HR数字化解决方案',
      features: ['员工档案管理', '绩效考核自动化', '薪酬计算系统', '培训计划制定'],
      benefits: '减少HR工作量80%，提升员工满意度',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Headphones,
      title: '客服销售数字员工',
      description: '24/7智能客户服务与销售支持',
      features: ['智能客服对话', '销售线索管理', '订单处理自动化', '客户关系维护'],
      benefits: '客户响应速度提升95%，销售转化率提高60%',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
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
            核心
            <span className="tech-text-gradient">服务</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            为企业提供全方位的智能体数字员工解决方案，覆盖招聘、人力资源、客服销售等关键业务场景
          </p>
        </motion.div>

        {/* 服务卡片 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* 背景渐变 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              {/* 图标 */}
              <motion.div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="h-8 w-8 text-white" />
              </motion.div>

              {/* 内容 */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                {/* 特性列表 */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.2) + (idx * 0.1), duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* 效益展示 */}
                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-gray-600 font-medium">{service.benefits}</p>
                </div>

                {/* CTA按钮 */}
                <motion.button
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-3 px-6 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>了解详情</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 底部说明 */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-tech-cyan/10 to-primary-600/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">为什么选择我们的数字员工服务？</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold tech-text-gradient mb-2">7×24</div>
                <p className="text-gray-600">全天候无间断服务</p>
              </div>
              <div>
                <div className="text-3xl font-bold tech-text-gradient mb-2">秒级</div>
                <p className="text-gray-600">响应速度</p>
              </div>
              <div>
                <div className="text-3xl font-bold tech-text-gradient mb-2">零错误</div>
                <p className="text-gray-600">标准化流程执行</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 