import type { LayoutLoad } from './$types';
import { writable } from 'svelte/store';

export const load: LayoutLoad = async () => {
  return {
    headerContent: writable('default')
  }
}