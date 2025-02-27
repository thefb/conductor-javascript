export interface ConductorLogger {
  info(...args: any): void
  error(...args: any): void
  debug(...args: any): void
}

export type ConductorLogLevel = keyof typeof LOG_LEVELS
export interface DefaultLoggerConfig {
  level?: ConductorLogLevel,
  tags?: Object[]
}

const LOG_LEVELS = {
  DEBUG: 10,
  INFO: 30,
  ERROR: 60
} as const


/*
This provides an easy way to get up and running without worrying about configuring a logging framework.
Ideally, users that care can easily override with any compatible logger (e.g. pino, etc)
 */
export class DefaultLogger implements ConductorLogger {
  private readonly tags: Object[]
  private readonly level: number

  constructor(config: DefaultLoggerConfig = {}) {
    const {level, tags = []} = config
    this.tags = tags
    if (level && level in LOG_LEVELS) {
      this.level = LOG_LEVELS[level]
    } else {
      this.level = LOG_LEVELS.INFO
    }
  }

  private log (level: ConductorLogLevel, ...args: any) {
    let resolvedLevel: number
    let name = level
    if (level in LOG_LEVELS) {
      resolvedLevel = LOG_LEVELS[level]
    } else {
      name = "INFO"
      resolvedLevel = LOG_LEVELS.INFO
    }
    if (resolvedLevel >= this.level) {
      console.log(name, ...this.tags, ...args)
    }
  }

  info = (...args: any): void => {
    this.log("INFO", ...args)
  }

  debug = (...args: any): void => {
    this.log("DEBUG", ...args)
  }

  error =(...args: any): void => {
    this.log("ERROR", ...args)
  }
}
