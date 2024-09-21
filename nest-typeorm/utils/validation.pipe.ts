import {
  ValidationPipe,
  ValidationError,
  BadRequestException,
} from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor() {
    super({
      disableErrorMessages: false,
      exceptionFactory: (errors: ValidationError[]) => {
        const errorMessage = errors
          .map((err) => Object.values(err.constraints || {}))
          .flat()
          .join(', ');

        return new BadRequestException({
          code: 400,
          msg: errorMessage,
        });
      },
    });
  }
}
