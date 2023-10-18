interface IDiceConfig {
  sides: number;
}

interface IDice {
  roll(): number;
}

const DEFAULT_CONFIG: IDiceConfig = {
  sides: 6,
};

class Dice implements IDice {
  readonly config: IDiceConfig = DEFAULT_CONFIG;

  constructor(private readonly options?: IDiceConfig) {
    if (!options) {
      console.log('dice::constructor - initalizing with default config\n');
      return;
    }

    console.log(
      'dice::constructor - initalizing with custom config',
      options,
      '\n'
    );
    this.config.sides = options.sides;
  }

  public roll(): number {
    return Math.floor(Math.random() * this.config.sides) + 1;
  }
}

export default Dice;
