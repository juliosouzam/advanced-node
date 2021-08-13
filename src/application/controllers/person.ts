export class PersonController {
  speak(name?: string): void {
    console.log(`Hi, ${name?.toUpperCase() ?? "Guest"}!!!`);
  }
}
