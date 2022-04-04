export default abstract class Project {
  public readonly appName: string;

  abstract start(): void;
}
