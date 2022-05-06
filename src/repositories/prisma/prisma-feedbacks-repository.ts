import { prisma } from '../../prisma'
import {FeedbackCreateData, FeedbackRepository} from '../feedbacks-repositories'

export class PrismaFeedbackRepository implements FeedbackRepository{
  async create({type, comment, screenshot}: FeedbackCreateData) {
  await prisma.feedback.create({
    data: {
      type: type,
      comment: comment,
      screenshot: screenshot,
    }
  })
}
}