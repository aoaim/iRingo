// automatically generated by the FlatBuffers compiler, do not modify

/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */

import * as flatbuffers from 'flatbuffers';

import { HourWeatherConditions } from '../wk2/hour-weather-conditions.js';
import { Metadata } from '../wk2/metadata.js';


export class HourlyForecastData {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):HourlyForecastData {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsHourlyForecastData(bb:flatbuffers.ByteBuffer, obj?:HourlyForecastData):HourlyForecastData {
  return (obj || new HourlyForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsHourlyForecastData(bb:flatbuffers.ByteBuffer, obj?:HourlyForecastData):HourlyForecastData {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new HourlyForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

metadata(obj?:Metadata):Metadata|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? (obj || new Metadata()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
}

hours(index: number, obj?:HourWeatherConditions):HourWeatherConditions|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? (obj || new HourWeatherConditions()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

hoursLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

static startHourlyForecastData(builder:flatbuffers.Builder) {
  builder.startObject(2);
}

static addMetadata(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, metadataOffset, 0);
}

static addHours(builder:flatbuffers.Builder, hoursOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, hoursOffset, 0);
}

static createHoursVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]!);
  }
  return builder.endVector();
}

static startHoursVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endHourlyForecastData(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createHourlyForecastData(builder:flatbuffers.Builder, metadataOffset:flatbuffers.Offset, hoursOffset:flatbuffers.Offset):flatbuffers.Offset {
  HourlyForecastData.startHourlyForecastData(builder);
  HourlyForecastData.addMetadata(builder, metadataOffset);
  HourlyForecastData.addHours(builder, hoursOffset);
  return HourlyForecastData.endHourlyForecastData(builder);
}
}
