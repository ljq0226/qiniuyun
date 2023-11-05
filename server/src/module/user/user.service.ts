import { Injectable } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async createUser(createUserInput: CreateUserInput) {
    const user = await this.prisma.user.findFirst({
      where: {
        email: createUserInput.email,
      },
    })
    if (!user) {
      const newUser = await this.prisma.user.create({ data: { ...createUserInput } })
      return newUser
    }
    else {
      return { code: 0, msg: '用户已注册' }
    }
  }

  async findAll() {
    return await this.prisma.user.findMany()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
