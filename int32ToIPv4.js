function int32ToIp(int32){
  if (int32 === 0) return '0.0.0.0'
  
  //10진수를 2진수로
  var bin = int32.toString(2); // === "1111011"
  var a = parseInt(bin.substring(0, 8), 2)
  var b = parseInt(bin.substring(8, 16), 2)
  var c = parseInt(bin.substring(16, 24), 2)
  var d = parseInt(bin.substring(24, 32), 2)

  return `${a}.${b}.${c}.${d}`
}

function int32ToIp(int32){
  return (
    ((int32 >> 24) & 0xFF) + "." +
    ((int32 >> 16) & 0xFF) + "." +
    ((int32 >>  8) & 0xFF) + "." +
    ((int32) & 0xFF)
  );
}