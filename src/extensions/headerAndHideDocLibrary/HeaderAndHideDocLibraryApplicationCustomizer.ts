import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HeaderAndHideDocLibraryApplicationCustomizerStrings';

require('./HideNewDocumentLibraryLink.css');

const LOG_SOURCE: string = 'HeaderAndHideDocLibraryApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHeaderAndHideDocLibraryApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderAndHideDocLibraryApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderAndHideDocLibraryApplicationCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);
    console.log("Loading CSS to hide the new Document Library link");

    return Promise.resolve();
    
  }
}
