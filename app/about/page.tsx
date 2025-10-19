import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">HV</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Đinh Hoàng Vương
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Sinh viên chuyên ngành Lập trình mạng
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dinhhoangvuong2k4@gmail.com" 
              className="btn-primary"
            >
              Liên hệ với tôi
            </a>
            <a 
              href="https://github.com/Zitests" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub Profile
            </a>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Thông tin cá nhân
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">👤</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Họ và tên</h3>
                    <p className="text-gray-600">Đinh Hoàng Vương</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">🎂</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ngày sinh</h3>
                    <p className="text-gray-600">25/08/2004</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">dinhhoangvuong2k4@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">📱</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Số điện thoại</h3>
                    <p className="text-gray-600">0968474342</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">💻</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Chuyên ngành</h3>
                    <p className="text-gray-600">Lập trình mạng</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary-600 text-sm">🔗</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GitHub</h3>
                    <a 
                      href="https://github.com/Zitests" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700"
                    >
                      github.com/Zitests
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Về tôi
              </h2>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 mb-6">
                  Xin chào! Tôi là <strong>Đinh Hoàng Vương</strong>, sinh ngày 25/08/2004. 
                  Hiện tại tôi đang là sinh viên chuyên ngành <strong>Lập trình mạng</strong> 
                  với niềm đam mê mãnh liệt về công nghệ và lập trình.
                </p>
                
                <p className="text-gray-700 mb-6">
                  Tôi có sở thích tìm hiểu và học hỏi những công nghệ mới, đặc biệt là 
                  trong lĩnh vực phát triển web và ứng dụng. Blog này là nơi tôi chia sẻ 
                  những kiến thức, kinh nghiệm và dự án mà tôi đã học được trong quá trình 
                  phát triển kỹ năng lập trình.
                </p>

                <p className="text-gray-700 mb-6">
                  Với mục tiêu trở thành một lập trình viên chuyên nghiệp, tôi luôn cố gắng 
                  học hỏi và cải thiện kỹ năng của mình mỗi ngày. Tôi tin rằng việc chia sẻ 
                  kiến thức không chỉ giúp người khác mà còn giúp bản thân tôi hiểu sâu hơn 
                  về những gì đã học.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kỹ năng và công nghệ
            </h2>
            <p className="text-lg text-gray-600">
              Những công nghệ và ngôn ngữ lập trình tôi đang học và sử dụng
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Programming Languages */}
            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">☕</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Java</h3>
                <p className="text-gray-600 mb-4">Backend Development</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Spring Boot</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">JavaScript</h3>
                <p className="text-gray-600 mb-4">Frontend & Backend</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>ES6+, Node.js</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚛️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">React</h3>
                <p className="text-gray-600 mb-4">Frontend Framework</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Hooks, Context</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js</h3>
                <p className="text-gray-600 mb-4">Full-stack Framework</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>SSR, API Routes</span>
                    <span>70%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🎨</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">CSS/Tailwind</h3>
                <p className="text-gray-600 mb-4">Styling & Design</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Responsive Design</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '80%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🗄️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Database</h3>
                <p className="text-gray-600 mb-4">Data Management</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>MySQL, MongoDB</span>
                    <span>65%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mục tiêu và định hướng
            </h2>
            <p className="text-lg text-gray-600">
              Những gì tôi muốn đạt được trong tương lai
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mục tiêu ngắn hạn
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Hoàn thành khóa học Java Spring Boot</li>
                    <li>• Thành thạo React và Next.js</li>
                    <li>• Xây dựng portfolio cá nhân</li>
                    <li>• Tham gia các dự án open source</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mục tiêu dài hạn
                  </h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Trở thành Full-stack Developer</li>
                    <li>• Làm việc tại công ty công nghệ lớn</li>
                    <li>• Phát triển ứng dụng có ích cho cộng đồng</li>
                    <li>• Chia sẻ kiến thức qua blog và video</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hãy kết nối với tôi!
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Tôi luôn sẵn sàng thảo luận về lập trình, công nghệ và cơ hội hợp tác.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:dinhhoangvuong2k4@gmail.com" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Gửi email cho tôi
            </a>
            <a 
              href="https://github.com/Zitests" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-700 text-white hover:bg-primary-800 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Xem GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
