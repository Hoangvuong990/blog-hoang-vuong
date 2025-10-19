import Link from 'next/link'
import { getBlogPosts } from '@/lib/posts'
import Image from 'next/image'

export default async function Home() {
  const posts = await getBlogPosts()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chào mừng đến với
              <span className="text-primary-600"> Blog Hoàng Vương</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Chia sẻ kiến thức về lập trình Java và JavaScript. 
              Nơi học hỏi và phát triển kỹ năng lập trình mạng.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/blog" className="btn-primary">
                Khám phá Blog
              </Link>
              <Link href="/about" className="btn-secondary">
                Tìm hiểu về tôi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bài viết nổi bật
            </h2>
            <p className="text-lg text-gray-600">
              Những bài viết mới nhất về lập trình Java và JavaScript
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 6).map((post) => (
              <article key={post.slug} className="card hover:shadow-lg transition-shadow duration-300">
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {new Date(post.date).toLocaleDateString('vi-VN')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Đọc thêm →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-primary">
              Xem tất cả bài viết
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Về tôi
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Xin chào! Tôi là <strong>Đinh Hoàng Vương</strong>, sinh ngày 25/08/2004. 
                Tôi đam mê lập trình mạng và chuyên về Java và JavaScript.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Blog này là nơi tôi chia sẻ những kiến thức, kinh nghiệm và dự án 
                mà tôi đã học được trong quá trình phát triển kỹ năng lập trình.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-primary">
                  Tìm hiểu thêm
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Liên hệ với tôi
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-primary-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">HV</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Đinh Hoàng Vương</h3>
                  <p className="text-primary-600 font-medium mb-4">Lập trình viên</p>
                  <div className="space-y-2 text-gray-600">
                    <p>📧 dinhhoangvuong2k4@gmail.com</p>
                    <p>📱 0968474342</p>
                    <p>🎂 25/08/2004</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Kỹ năng chuyên môn
            </h2>
            <p className="text-lg text-gray-600">
              Những công nghệ và ngôn ngữ lập trình tôi sử dụng
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">☕</span>
              </div>
              <h3 className="font-semibold text-gray-900">Java</h3>
              <p className="text-sm text-gray-600">Backend Development</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900">JavaScript</h3>
              <p className="text-sm text-gray-600">Frontend & Backend</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="font-semibold text-gray-900">React</h3>
              <p className="text-sm text-gray-600">Frontend Framework</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-gray-900">Next.js</h3>
              <p className="text-sm text-gray-600">Full-stack Framework</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
