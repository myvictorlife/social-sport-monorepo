import { LoginEffects } from './login/login.effects';
import { CourtsEffects } from './courts/courts.effects';
import { ProfileEffects } from './profile/profile.effects';

export const coreEffectsAtBootstrap = [LoginEffects, CourtsEffects, ProfileEffects];
