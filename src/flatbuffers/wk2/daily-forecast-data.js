// automatically generated by the FlatBuffers compiler, do not modify
/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any, @typescript-eslint/no-non-null-assertion */
import * as flatbuffers from 'flatbuffers';
import { DayWeatherConditions } from '../wk2/day-weather-conditions.js';
import { Metadata } from '../wk2/metadata.js';
export class DailyForecastData {
    bb = null;
    bb_pos = 0;
    __init(i, bb) {
        this.bb_pos = i;
        this.bb = bb;
        return this;
    }
    static getRootAsDailyForecastData(bb, obj) {
        return (obj || new DailyForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    static getSizePrefixedRootAsDailyForecastData(bb, obj) {
        bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
        return (obj || new DailyForecastData()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
    }
    metadata(obj) {
        const offset = this.bb.__offset(this.bb_pos, 4);
        return offset ? (obj || new Metadata()).__init(this.bb.__indirect(this.bb_pos + offset), this.bb) : null;
    }
    days(index, obj) {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? (obj || new DayWeatherConditions()).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + offset) + index * 4), this.bb) : null;
    }
    daysLength() {
        const offset = this.bb.__offset(this.bb_pos, 6);
        return offset ? this.bb.__vector_len(this.bb_pos + offset) : 0;
    }
    static startDailyForecastData(builder) {
        builder.startObject(2);
    }
    static addMetadata(builder, metadataOffset) {
        builder.addFieldOffset(0, metadataOffset, 0);
    }
    static addDays(builder, daysOffset) {
        builder.addFieldOffset(1, daysOffset, 0);
    }
    static createDaysVector(builder, data) {
        builder.startVector(4, data.length, 4);
        for (let i = data.length - 1; i >= 0; i--) {
            builder.addOffset(data[i]);
        }
        return builder.endVector();
    }
    static startDaysVector(builder, numElems) {
        builder.startVector(4, numElems, 4);
    }
    static endDailyForecastData(builder) {
        const offset = builder.endObject();
        return offset;
    }
    static createDailyForecastData(builder, metadataOffset, daysOffset) {
        DailyForecastData.startDailyForecastData(builder);
        DailyForecastData.addMetadata(builder, metadataOffset);
        DailyForecastData.addDays(builder, daysOffset);
        return DailyForecastData.endDailyForecastData(builder);
    }
}
