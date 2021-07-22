import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      requirement: Model
    },

    seeds(server) {
      server.create("requirement", { id: "12312dsafsds", description: "RF001 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "32423rfdsfd2", description: "RF002 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234erfsf324h", description: "RF003 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "23434rfsf34h", description: "RF004 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234edfgf324h", description: "RF005 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234erasf324h", description: "RF006 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234eriuy324h", description: "RF007 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234erf78724h", description: "RF008 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "23rty5sf324h", description: "RF009 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234e789khj4h", description: "RF010 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234567sf3245", description: "RF011 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234errtt324h", description: "RF012 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "23445653f34h", description: "RF013 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "234e2343ff4h", description: "RF014 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
      server.create("requirement", { id: "qqdsds33fsdf", description: "RF015 - Lorem ipsum dolor sit amet", date: new Date((new Date().getTime() / 1000) * Math.random()) })
    },

    routes() {
      this.namespace = "api"

      this.get("/requirements", (schema) => {
        return schema.requirements.all()
      })
      this.namespace = ""
      this.passthrough()
    },
    
  })

  return server
}