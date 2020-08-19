import {LoadImage} from './load-image';

describe('LoadImage', () => {
  let loadImage: LoadImage = new LoadImage();


  it('should be created', () => {
    expect(loadImage).toBeTruthy();
  });

  describe('Observer methods', function () {
    it('should create next function', function () {
      expect(loadImage.next !== undefined).toBeTrue()
    })

    it('should create error function', function () {
      expect(loadImage.error !== undefined).toBeTrue()
    })

    it('should create error complete', function () {
      expect(loadImage.complete !== undefined).toBeTrue()
    })
  })

  it('should notify image Element', function () {
    expect(loadImage.next({
      id: 'teste',
      message: 'https://blog.influu.me/wp-content/uploads/2019/05/5c6eadcca1c015297681b844.jpg',
    })).toBeUndefined()
  });

  it('should throw Tab Not found', function () {
    expect(() => loadImage.next({
      id: undefined,
      message: 'https://blog.influu.me/wp-content/uploads/2019/05/5c6eadcca1c015297681b844.jpg'
    })).toThrowError('Tab Not found')
  });

});
