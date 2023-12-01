import mongoose, { Document, Model, Schema } from 'mongoose';
import type { VercelRequest, VercelResponse } from '@vercel/node';

// MongoDB连接字符串
const uri = process.env.MONGODB_URI as string;

// MongoDB模型接口
interface Item extends Document {
  name: string;
  description: string;
}

// 连接到数据库
const connectToDatabase = async () => {
  await mongoose.connect(uri);
};

// 创建Item模型
const ItemSchema = new Schema<Item>({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const ItemModel: Model<Item> = mongoose.model('flow', ItemSchema);

// Serverless函数
export default async (req: VercelRequest, res: VercelResponse) => {
  try {
    // 连接到数据库
    await connectToDatabase();

    // 你可以在这里执行任何 mongoose 操作
    // 例如，这里创建一个简单的API端点返回所有文档
    const documents = await ItemModel.find({});
    // 返回结果
    res.status(200).json({ data: documents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
