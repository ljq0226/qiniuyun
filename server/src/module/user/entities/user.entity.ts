import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class User {
  @Field(() => String)
  uid: string

  @Field(() => String)
  avatar: string

  @Field(() => String)
  username: string
}
