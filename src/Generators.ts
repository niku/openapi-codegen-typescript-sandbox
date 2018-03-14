import ElixirPlug from "./ElixirPlug";
import Generator from "./Generator";

export default class Generators {
  private readonly type: string;
  private readonly outputPath: string;
  private readonly config: any;

  constructor(type: string, outputPath: string, config: any) {
    this.type = type;
    this.outputPath = outputPath;
    this.config = config;
  }

  public generate(openAPI: any): any {
    new ElixirPlug(this.outputPath, this.config).generate(openAPI);
  }
}
