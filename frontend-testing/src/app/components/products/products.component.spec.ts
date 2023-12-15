import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';

describe('Products Component', () => {
  beforeEach(async () => {
    // Arrange
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
    }).compileComponents();
  });

  let fixture: ComponentFixture<ProductsComponent>;
  let app: ProductsComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);

    app = fixture.componentInstance;
  });

  it('should render the list items for products', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('ul li')).not.toBeUndefined();
  });

  it('should create the products inside component', () => {
    fixture.detectChanges();
    expect(app.products).not.toBeLessThanOrEqual(0);
  });

  it('shoudl render the Products component', () => {
    // Assert
    expect(app).toBeTruthy();
  });

  it('should return true', () => {
    expect(false).not.toBeTruthy();
  });

  it('should test length of array', () => {
    let products = ['A', 'B', 'C'];
    // expect(products).toHaveSize(3);
    expect(products.length).toEqual(3);
  });
});

// # Setup and Tear Down
// beforeEach()
// beforeAll()
// afterEach()
// afterAll()
