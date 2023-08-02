import { MetaDataclass } from "./meta.model";

export class PagedList<T> {
    metaData : MetaDataclass = new MetaDataclass();
    items: T[];
}