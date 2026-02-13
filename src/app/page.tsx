export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          俄语发音评估系统
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          基于 Azure Speech Services 的专业发音评估工具
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">实时评估</h2>
            <p className="text-gray-600">
              实时录音并评估发音准确度、流利度和完整度
            </p>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">文件评估</h2>
            <p className="text-gray-600">
              上传音频文件进行详细的发音分析
            </p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-sm text-yellow-800">
            ⚠️ 请在 Vercel 部署后配置环境变量：
            NEXT_PUBLIC_AZURE_SPEECH_KEY、NEXT_PUBLIC_AZURE_SPEECH_REGION
          </p>
        </div>
      </div>
    </main>
  );
}