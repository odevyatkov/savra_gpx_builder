import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { isDevMode } from './helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  if (isDevMode()) {
    const title = 'GPX Builder API';
    const description = 'All the API calls related to the GPX Build';
    const config = new DocumentBuilder().setTitle(title).setDescription(description).setVersion('1.0').addTag('Root').build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('/swagger', app, document);
  }
  await app.listen(3000);
}
void bootstrap();
