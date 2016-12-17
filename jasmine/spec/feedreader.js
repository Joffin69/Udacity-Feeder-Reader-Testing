
$(function() {
	
    describe('RSS Feeds', function() {
        
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

		it('url is not empty', function() {
			allFeeds.forEach(function(feeds) {
				expect(feeds.url).toBeDefined();
				expect(feeds.url.length).not.toBe(0);
			});
		});

		it('name is not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
		
    });

	describe('The menu', function() {

		it('is hidden by default', function() {
			expect(document.body.classList).toContain('menu-hidden');
		}); 

		it('should change visibility', function() {
			$('.menu-icon-link').click();
			expect(document.body.classList).not.toContain('menu-hidden');
			$('.menu-icon-link').click();
			expect(document.body.classList).toContain('menu-hidden');
		});  

	});	  

	describe('Initial Entries', function() {

		beforeEach(function(done) {
			loadFeed(0, done);
		});
		
		it('contains atleast one entry', function() {
			expect($('.feed .entry').length).not.toBe(0);
		});
	});
	
	describe('New Feed Selection', function() {
		var oldfeed , newfeed;

		beforeEach(function(done) {
			loadFeed(0, function() {
				oldfeed = ($('.feed').html());
				loadFeed(1, function() {
					newfeed = ($('.feed').html());
					done();	
				});
			});
		});

		it('content actually changes', function() {
			expect(oldfeed).not.toEqual(newfeed);
		});
		
	});	 
	
}());
