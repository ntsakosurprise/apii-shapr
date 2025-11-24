
export const mapper = (source: any, map: any) => {

  if (!(source instanceof Array)) {
    let theReturned = responseMapperHelper(source, map);
   
    return theReturned;
  }
  let proccessedMap = source.map((src: any) => {
    return responseMapperHelper(src, map);
  });
  
  return proccessedMap;

  
};

export const requestMapper = (source: any, map: any) => {
  let output: any = {};
  let keys: any = Object.keys(source);
 
  for (let e = 0; e < keys.length; ++e) {
    let sourceKey = keys[e];
   
    if (map.hasOwnProperty([sourceKey])) {
      output[map[sourceKey]] = source[sourceKey];
    } else {
      output[sourceKey] = source[sourceKey];
    }
  }

  
  return output;
};

export const responseMapperHelper = (source: any, map: any) => {
  let output: any = {};

  let keys: any = Object.keys(map);
 

  for (let e = 0; e < keys.length; ++e) {
    let mapKey = keys[e];
    let mapValue = map[`${mapKey}`];
   
    if (mapValue instanceof Object) {
      
      if (source.hasOwnProperty(mapValue.id)) {
        
        if (source[mapValue.id] === null) {
          output[mapKey] = null;
        } else if (!mapValue?.refine) {
          output[mapKey] = mapper(source[mapValue.id], mapValue.getValue());
        } else {
          output[mapKey] = mapValue.getValue(source[mapValue.id]);
        }
      }
      continue;
    }
    
    if (source.hasOwnProperty(mapValue)) {
      output[mapKey] = source[mapValue];
    }
  }
 
  return output;
};
