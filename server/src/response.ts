import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class Res {
  @Field(() => Number)
  code: number

  @Field(() => String)
  msg: string
}
