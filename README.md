# 俄语发音评估系统

基于 Next.js 16 + Azure Speech Services 的俄语发音评估应用。

## 功能特性

- 实时语音识别与发音评估
- 音频文件上传评估
- 多维度评估（准确度、流利度、完整度、语调）
- 现代化 UI（shadcn/ui）

## 快速开始

\`\`\`bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start
\`\`\`

## 环境变量

\`\`\`
NEXT_PUBLIC_AZURE_SPEECH_KEY=你的Azure密钥
NEXT_PUBLIC_AZURE_SPEECH_REGION=你的Azure区域
\`\`\`

## 部署

推荐使用 Vercel 部署：https://vercel.com