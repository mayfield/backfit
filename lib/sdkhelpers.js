"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMessageName = getMessageName;
exports.getFieldObject = getFieldObject;

var _sdk = require("./sdk");

function getMessageName(messageNum) {
  var message = _sdk.FITSDK.messages[messageNum];
  return message ? message.name : '';
}

function getFieldObject(fieldNum, messageNum) {
  var message = _sdk.FITSDK.messages[messageNum];

  if (!message) {
    return {
      type: "",
      field: ""
    };
  }

  var fieldObj = message[fieldNum];

  if (!fieldObj) {
    return {
      type: "",
      field: ""
    };
  }

  return fieldObj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZGtoZWxwZXJzLnRzIl0sIm5hbWVzIjpbImdldE1lc3NhZ2VOYW1lIiwibWVzc2FnZU51bSIsIm1lc3NhZ2UiLCJGSVRTREsiLCJtZXNzYWdlcyIsIm5hbWUiLCJnZXRGaWVsZE9iamVjdCIsImZpZWxkTnVtIiwidHlwZSIsImZpZWxkIiwiZmllbGRPYmoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBRU8sU0FBU0EsY0FBVCxDQUF3QkMsVUFBeEIsRUFBb0Q7QUFDekQsTUFBTUMsT0FBTyxHQUFHQyxZQUFPQyxRQUFQLENBQWdCSCxVQUFoQixDQUFoQjtBQUNBLFNBQU9DLE9BQU8sR0FBR0EsT0FBTyxDQUFDRyxJQUFYLEdBQWtCLEVBQWhDO0FBQ0Q7O0FBRU0sU0FBU0MsY0FBVCxDQUF3QkMsUUFBeEIsRUFDTE4sVUFESyxFQUN3QjtBQUM3QixNQUFNQyxPQUFPLEdBQUdDLFlBQU9DLFFBQVAsQ0FBZ0JILFVBQWhCLENBQWhCOztBQUNBLE1BQUksQ0FBQ0MsT0FBTCxFQUFjO0FBQ1osV0FBTztBQUNMTSxNQUFBQSxJQUFJLEVBQUUsRUFERDtBQUVMQyxNQUFBQSxLQUFLLEVBQUU7QUFGRixLQUFQO0FBSUQ7O0FBQ0QsTUFBTUMsUUFBUSxHQUFZUixPQUFPLENBQUNLLFFBQUQsQ0FBakM7O0FBQ0EsTUFBSSxDQUFDRyxRQUFMLEVBQWU7QUFDYixXQUFPO0FBQ0xGLE1BQUFBLElBQUksRUFBRSxFQUREO0FBRUxDLE1BQUFBLEtBQUssRUFBRTtBQUZGLEtBQVA7QUFJRDs7QUFDRCxTQUFPQyxRQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi90eXBlcyc7XG5pbXBvcnQgeyBGSVRTREsgfSBmcm9tICcuL3Nkayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlTmFtZShtZXNzYWdlTnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBtZXNzYWdlID0gRklUU0RLLm1lc3NhZ2VzW21lc3NhZ2VOdW1dO1xuICByZXR1cm4gbWVzc2FnZSA/IG1lc3NhZ2UubmFtZSA6ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmllbGRPYmplY3QoZmllbGROdW06IG51bWJlcixcbiAgbWVzc2FnZU51bTogbnVtYmVyKTogTWVzc2FnZSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBGSVRTREsubWVzc2FnZXNbbWVzc2FnZU51bV07XG4gIGlmICghbWVzc2FnZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBcIlwiLFxuICAgICAgZmllbGQ6IFwiXCIsXG4gICAgfVxuICB9XG4gIGNvbnN0IGZpZWxkT2JqID0gPE1lc3NhZ2U+bWVzc2FnZVtmaWVsZE51bV07XG4gIGlmICghZmllbGRPYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogXCJcIixcbiAgICAgIGZpZWxkOiBcIlwiLFxuICAgIH1cbiAgfVxuICByZXR1cm4gZmllbGRPYmo7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2RrIHtcbiAgc2NDb25zdDogbnVtYmVyO1xuICBvcHRpb25zOiBTZGtPcHRpb25zO1xuICBtZXNzYWdlczogeyBba2V5OiBudW1iZXJdOiBNZXNzYWdlR3JvdXAgfTtcbiAgdHlwZXM6IHsgW2tleTogc3RyaW5nXTogVHlwZSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNka09wdGlvbnMge1xuICBzcGVlZFVuaXRzOiB7IFt1bml0OiBzdHJpbmddOiBVbml0RmllbGRzIH07XG4gIGxlbmd0aFVuaXRzOiB7IFt1bml0OiBzdHJpbmddOiBVbml0RmllbGRzIH07XG4gIHRlbXBlcmF0dXJlVW5pdHM6IHsgW3VuaXQ6IHN0cmluZ106IFVuaXRGaWVsZHMgfTtcbiAgW3VuaXRLZXk6IHN0cmluZ106IHsgW3VuaXQ6IHN0cmluZ106IFVuaXRGaWVsZHMgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVbml0RmllbGRzIHtcbiAgbXVsdGlwbGllcjogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlR3JvdXAge1xuICBuYW1lOiBzdHJpbmc7XG4gIFtrZXk6IG51bWJlcl06IE1lc3NhZ2Vcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUeXBlIHtcbiAgW2tleTogbnVtYmVyXTogc3RyaW5nfG51bWJlcjtcbn1cbiJdfQ==