/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      passReqToCallback: true,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: JwtPayload, done) {
    const user = await this.authService.validateUser(payload.user);
    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}
