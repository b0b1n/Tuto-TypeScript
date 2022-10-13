const addId = <T extends object>(obj: T) => {
  const id = (Math.random() * 100).toFixed().toString();
  return {
    id,
    ...obj,
  };
};

interface lInterface<T, V> {
  name: string;
  data: T;
  content: V;
}

const luser: lInterface<string, { meta: string }> = {
  name: "LUSER",
  data: "myData",
  content: {
    meta: "myContent",
  },
};

const soUser : lInterface<number, object > = {
    name : "soUser",
    content : {meta : "object"},
    data : 12
} 

const result = addId<lInterface<number, object >>(soUser);
console.log("result", result);
