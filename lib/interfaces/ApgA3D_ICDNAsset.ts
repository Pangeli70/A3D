/** ---------------------------------------------------------------------------
 * @module [ApgA3D]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.1 APG 20240225
 * @version 0.2 APG 20241209 Moved to A3D module
 * ----------------------------------------------------------------------------
 */

import { ApgA3D_eTextureType } from "../enums/ApgA3D_eTextureType.ts";



/**
 * Asset data (usually a texture) saved remotely in a Content Delivery Network (CDN)
 */
export interface ApgA3D_ICDNAsset {

  /**
   * Identifier
   */
  CDNAssetId: string;

  /**
   * Texture type
   */
  type: ApgA3D_eTextureType;

  /**
   * Local path for development
   */
  local: string;

  /**
   * CDN management url page
   */
  remoteUrl_1?: string;

  /**
   * Remote path to the asset in the CDN. 
   * For distribution in production on Deno Deploy this should always be defined and available
   */
  remote_1?: string;
}
