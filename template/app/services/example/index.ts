import { getSomeData } from './example'

class ExampleServices {
  // методы для работы с api
  getSomeData = () => getSomeData()
}

const exampleServices = new ExampleServices()

export { exampleServices }
