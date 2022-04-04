export function clickTextCenter(text: string) {
  $selector().text(text).findOne().clickCenter();
}

export function kill() {
  return $shell("am force-stop " + this.packageName, true);
}
