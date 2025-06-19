'use client'

import { motion } from 'framer-motion'
import { Bot, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const Footer = () => {
  const companyInfo = {
    name: '上海森泽智创人工智能技术有限公司',
    address: '上海市浦东新区陆家嘴金融中心',
    phone: '400-123-4567',
    email: 'contact@hireclouds.com',
    icp: '沪ICP备2024000001号'
  }

  const services = [
    '招聘数字员工',
    '人力资源数字员工',
    '客服销售数字员工',
    '定制化解决方案'
  ]

  const quickLinks = [
    { name: '关于我们', href: '#about' },
    { name: '核心服务', href: '#services' },
    { name: '解决方案', href: '#solutions' },
    { name: '客户案例', href: '#cases' },
    { name: '联系我们', href: '#contact' }
  ]

  const policies = [
    { name: '隐私政策', href: '#' },
    { name: '服务条款', href: '#' },
    { name: '数据安全', href: '#' },
    { name: '使用协议', href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 主要内容 */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 公司信息 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-tech-cyan to-primary-600 rounded-xl">
                  <Bot className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">智创云AI</h3>
                  <p className="text-gray-400">数字员工专家</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                专注于智能体数字员工外包服务的创新科技企业，致力于通过前沿AI技术重塑企业工作方式，
                为客户提供高效、专业的数字化转型解决方案。
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-tech-cyan flex-shrink-0" />
                  <span className="text-gray-300">{companyInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-tech-cyan flex-shrink-0" />
                  <span className="text-gray-300">{companyInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-tech-cyan flex-shrink-0" />
                  <span className="text-gray-300">{companyInfo.email}</span>
                </div>
              </div>
            </motion.div>

            {/* 服务项目 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">核心服务</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#services"
                      className="text-gray-300 hover:text-tech-cyan transition-colors duration-300 flex items-center group"
                    >
                      <span>{service}</span>
                      <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 快速链接 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6">快速导航</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-tech-cyan transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="text-sm font-semibold mb-4 text-gray-400">政策条款</h5>
                <ul className="space-y-2">
                  {policies.map((policy, index) => (
                    <li key={index}>
                      <a
                        href={policy.href}
                        className="text-gray-400 hover:text-gray-300 transition-colors duration-300 text-sm"
                      >
                        {policy.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 底部信息 */}
        <motion.div
          className="border-t border-gray-800 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 {companyInfo.name}. 保留所有权利.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                {companyInfo.icp} | 营业执照统一社会信用代码: 91310000000000000X
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">服务状态正常</span>
              </div>
              <div className="text-gray-400 text-sm">
                在线咨询 7×24小时
              </div>
            </div>
          </div>
          
          {/* 技术支持声明 */}
          <div className="mt-6 pt-6 border-t border-gray-800">
            <div className="text-center">
              <p className="text-gray-500 text-xs">
                本网站采用SSL安全加密 | 数据备份云端存储 | 符合等保三级标准
              </p>
              <div className="flex justify-center items-center space-x-4 mt-2">
                <span className="text-gray-600 text-xs">技术支持：</span>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-tech-cyan rounded-full"></div>
                  <span className="text-gray-500 text-xs">阿里云</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-tech-cyan rounded-full"></div>
                  <span className="text-gray-500 text-xs">腾讯云</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1 h-1 bg-tech-cyan rounded-full"></div>
                  <span className="text-gray-500 text-xs">华为云</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 