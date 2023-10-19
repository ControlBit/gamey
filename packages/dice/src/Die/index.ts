interface IDieConfig {
  sides: number;
}

interface IDie {
  roll(): number;
}

const DEFAULT_CONFIG: IDieConfig = {
  sides: 6,
};

class Die implements IDie {
  readonly config: IDieConfig = DEFAULT_CONFIG;

  constructor(private readonly options?: IDieConfig) {
    if (!options) {
      console.log('die::constructor - initalizing with default config\n');
      return;
    }

    console.log(
      'die::constructor - initalizing with custom config',
      options,
      '\n'
    );
    this.config.sides = options.sides;
  }

  public roll(): number {
    return Math.floor(Math.random() * this.config.sides) + 1;
  }
}

export default Die;
