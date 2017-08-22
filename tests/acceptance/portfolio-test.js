import { test } from 'qunit';
import moduleForAcceptance from 'ruthie-portfolio/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | portfolio');

test('should show portfolio as the home page.', function (assert) {
  visit('/');
  andThen(function() {
    assert.equal(currentURL(), '/portfolio', 'should redirect automatically');
  })
});

test('should link to the about page.', function (assert) {
  visit('/');
  click('a:contains("about")');
  andThen(function() {
    assert.equal(currentURL(), '/about', 'should navigate to about');
  });
});

test('should link to the sketchbook page.', function (assert) {
  visit('/');
  click('a:contains("sketchbook")');
  andThen(function() {
    assert.equal(currentURL(), '/sketchbook', 'should navigate to sketchbook');
  })
});

test('should link to the contact page.', function (assert) {
  visit('/');
  click('a:contains("contact")');
  andThen(function() {
    assert.equal(currentURL(), '/contact', 'should navigate to contact');
  })
});

test('should show a detail view of an image.', function (assert) {
  
});

// test('should show details for a selected rental', function (assert) {
// });

// test('visiting /', function(assert) {
//   visit('/');

//   andThen(function() {
//     assert.equal(currentURL(), '/');
//   });
// });
