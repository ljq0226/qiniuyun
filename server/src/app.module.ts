import { join } from 'node:path'
import { Module } from '@nestjs/common'
import { PrismaModule } from 'nestjs-prisma'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { UserModule } from './module/user/user.module'
import { AppService } from './app.service'
import { AppController } from './app.controller'

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {},
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
