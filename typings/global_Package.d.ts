
interface HashMap {
  [key: string]: any
}

declare module NodeJS  {
  interface Global {
    Package: HashMap
  }
}
