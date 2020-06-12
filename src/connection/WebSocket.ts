import { Connection } from '.';

export default class WebSocketConnection implements Connection {
  private socket: WebSocket;

  constructor(wsUrl: string) {
    this.socket = new WebSocket(wsUrl);
  }

  async open() {
    return new Promise(resolve => {
      this.socket.onopen = resolve;
    });
  }

  write(data: Buffer) {
    return this.socket.send(data);
  }

  close() {
    this.socket.close();
    return new Promise(resolve => {
      this.socket.onclose = resolve;
    });
  }
}
