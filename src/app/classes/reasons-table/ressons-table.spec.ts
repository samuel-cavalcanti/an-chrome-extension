import {ReasonsTable} from './reasons-table';

describe('ReasonsTable', () => {
  it('should create an instance', () => {
    expect(new ReasonsTable()).toBeTruthy();
  });


  it('should be igual to: image is too small', () => {
    expect(ReasonsTable.Image_size_too_small).toEqual('image is too small')
  })

  it('should be igual to : Non source image', () => {
    expect(ReasonsTable.Could_not_load_image_from_external_source).toEqual('Non source image')
  })

  it('should be igual to : Non source image', () => {
    expect(ReasonsTable.No_tab_No_prediction).toEqual('No tab No prediction')
  })

  it('should be igual to : waiting for model', () => {
    expect(ReasonsTable.Waiting_for_model_to_load).toEqual('waiting for model')
  })
});
