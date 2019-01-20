import {CTypeOfReaction} from './c-type-of-reaction';
import {StaticFields} from '../static-fields';

export class Calculation extends StaticFields {
  signal: string;
  date: Date;
  heartRate: number;
  systolicPressure: number;
  diastolicPressure: number;
  pulsePressure: number;
  pulseRate: number;
  pulseRecoveryMinutes: number;
  changesSystolicPressure: number;
  changesDiastolicPressure: number;
  changesPulsePressure: number;
  recoveryPulsePressureMinutes: number;
  cTypeOfReactionSchema: CTypeOfReaction;
}
