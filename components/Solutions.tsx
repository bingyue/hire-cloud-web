'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, TrendingUp, Clock, DollarSign, Shield, Zap } from 'lucide-react'

const Solutions = () => {
  const painPoints = [
    {
      icon: Clock,
      title: '人力资源不足',
      problem: '招聘周期长，人员流动率高',
      solution: 'AI数字员工即时上岗，无需培训',
      improvement: '减少75%招聘时间'
    },
    {
      icon: DollarSign,
      title: '运营成本过高',
      problem: '人工成本持续上升，ROI下降',
      solution: '智能化流程，降低人力依赖',
      improvement: '节省60%运营成本'
    },
    {
      icon: TrendingUp,
      title: '效率提升瓶颈',
      problem: '重复性工作占用大量时间',
      solution: '自动化处理标准流程',
      improvement: '提升90%工作效率'
    },
    {
      icon: AlertTriangle,
      title: '服务质量不稳定',
      problem: '人为因素导致服务差异',
      solution: '标准化AI服务，零变异',
      improvement: '99.9%服务一致性'
    }
  ]

  const industries = [
    { name: '电商零售', desc: '客服、订单处理、库存管理', growth: '+150%' },
    { name: '金融服务', desc: '风控、客户服务、数据分析', growth: '+120%' },
    { name: '教育培训', desc: '学员管理、课程安排、答疑', growth: '+200%' },
    { name: '医疗健康', desc: '预约管理、患者服务、数据录入', growth: '+180%' },
    { name: '制造业', desc: '生产调度、质量控制、供应链', growth: '+130%' },
    { name: '房地产', desc: '客户跟进、合同管理、数据分析', growth: '+160%' }
  ]

  return (
    <section id="solutions" className="py-20 bg-gray-50">
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
            解决
            <span className="tech-text-gradient">方案</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            针对企业面临的核心痛点，提供精准的智能化解决方案
          </p>
        </motion.div>

        {/* 痛点与解决方案 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{point.title}</h3>
              </div>

              <div className="space-y-4">
                {/* 问题 */}
                <div className="bg-red-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-red-700">痛点</span>
                  </div>
                  <p className="text-sm text-red-600">{point.problem}</p>
                </div>

                {/* 解决方案 */}
                <div className="bg-green-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-green-700">解决方案</span>
                  </div>
                  <p className="text-sm text-green-600">{point.solution}</p>
                </div>

                {/* 效果 */}
                <div className="bg-blue-50 rounded-lg p-3">
                  <div className="flex items-center space-x-2 mb-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-blue-700">效果</span>
                  </div>
                  <p className="text-sm font-bold text-blue-600">{point.improvement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 行业应用场景 */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              多行业成功应用
            </h3>
            <p className="text-gray-600 text-lg">
              我们的智能体数字员工已在多个行业实现成功落地
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{industry.name}</h4>
                  <div className="text-green-600 font-bold text-lg">{industry.growth}</div>
                </div>
                <p className="text-gray-600 mb-4">{industry.desc}</p>
                
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">效率提升</span>
                </div>

                {/* 悬浮效果 */}
                <div className="absolute inset-0 bg-gradient-to-r from-tech-cyan/10 to-primary-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 底部亮点 */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: '安全可靠', desc: '企业级数据安全保障' },
              { icon: Zap, title: '快速部署', desc: '7天内完成系统上线' },
              { icon: TrendingUp, title: '持续优化', desc: '基于数据的智能改进' }
            ].map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-tech-cyan to-primary-600 rounded-2xl mb-4">
                  <highlight.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600">{highlight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions 