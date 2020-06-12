export { default as InMemory } from './InMemory';
export { default as WebUSB } from './WebUSB';
export { default as WebSocketConnection } from './WebSocket';

export interface Connection {
  open(): void;
  write(data: Buffer): void;
  close(): void;
}
